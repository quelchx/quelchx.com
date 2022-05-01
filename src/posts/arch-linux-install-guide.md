---
title: Installing Arch Linux With KDE Made Easy
date: "March 12, 2021"
category: ["Linux"]
excerpt: Installing Arch Linux is usually a nerve racking experience expecially if you never have done it. There is a lot of information out there, and can sometimes be intimidating. This guide should help you get Arch Linux installed and running step by step.
cover_image: "https://cdn0.iconfinder.com/data/icons/flat-round-system/512/archlinux-512.png"
---

# Quick Arch Linux Install Guide

This guide is just a very quick overhaul of how to get Arch Linux with a KDE Plasma desktop up and running with minimal applications. I have done this method a few times and have had no issues. This is not an overly explained guide. This is just some information I have gathered from various sources and pieced together to get working for myself

**Warning**

The method discussed here wipes out existing operating system(s) from your computer and install Arch Linux on it. So if you are going to follow this tutorial, make sure that you have backed up your files or else you’ll lose all of it. You have been warned.

## Requirements for Arch Linux Install

- A x86_64 (i.e. 64 bit) compatible machine
- Minimum 512 MB of RAM (recommended 2 GB)
- At least 2 GB of free disk space (recommended 20 GB for basic usage with a desktop environment)
- An active internet connection
- A USB drive with minimum 2 GB of storage capacity
- Familiarity with Linux command line
- USB Connection to the internet. This Guide does not use WIFI

## Steps

1. Download arch linux iso from https://www.archlinux.org/download/
2. Create a live USB of Arch Linux -- Use Etcher (https://www.balena.io/etcher/) or Rufus (https://rufus.ie/)
3. Boot from the live USB. (Google how to do this with your current machine)
4. When your booted into Arch follow steps below

## Partition the disks

**To check lists of disks use command `fdisk-l` should list various harddrives on the current machine such as `/dev/sda` or `/dev/nvme0n1`**

First, select the disk you are going to format and partition:
in this example I will be using a nvme0n1 example

- `fdisk /dev/nvme0n1`
- To fully delete each partition in the current harddrive type in `d` then delete existing partions on this current drive
- Then we will create a new partition, type in `n`
- Type in `1`, select default (`enter`) on first sector, and last sector type `+512M`
- Then type `t` and then type `1` to make this partition EFI
- Now we need to create a root partition
- type `n` then `2` and hit `enter` for the rest to make a root partition, can make a custom size when prompt if you wish. In my case I made it the rest of the drives space

## Creating the filesystem

So we have two disk partitions. The first one is an EFI. So we will create a FAT32 filesystem onto it with the mkfs commands

- `mkfs.fat -F32 /dev/nvme0n1p1`

Now create an Ext4 filesystem on the root partition:

- `mkfs.ext4 /dev/nvme0n1p2`

## Select an appropriate mirror

- `pacman -Syy`

_This is not really needed but can be helpful with download speeds_

- `pacman -S reflector`

- `cp /etc/pacman.d/mirrorlist /etc/pacman.d/mirrorlist.bak`

- `reflector -c "US" -f 12 -l 10 -n 12 --save /etc/pacman.d/mirrorlist`

All good to go now.

## Install Arch Linux

- `mount /dev/nvme0n1p2 /mnt`

- `pacstrap /mnt base linux linux-firmware`

**Configure the installed Arch system**

- `genfstab -U /mnt >> /mnt/etc/fstab`

- `arch-chroot /mnt`

To List and then set your timezone accordingly

- `timedatectl list-timezones`

And then set it up like this (replace America/Detroit with your desired time zone):

- `timedatectl set-timezone America/Detroit`

## Adding Hostname

In my case, I’ll set the hostname as arch. You can choose whatever you want:

- `echo arch > /etc/hostname`

Set up root password:

- passwd

## Grub Bootloader

- `pacman -S grub efibootmgr`
- `mkdir /boot/efi`
- `mount /dev/nvme0n1p1 /boot/efi`
- `grub-install --target=x86_64-efi --bootloader-id=GRUB --efi-directory=/boot/efi`
- `grub-mkconfig -o /boot/grub/grub.cfg`

Setting up your username and login
First before we install the Desktop Enviroment we will add a current user to login to

- `user -m yourusername`

Then we will set the password for **this current user**

- `passwd yourusername`

Then we need to install sudo and nano (command line text editor):

- `pacman -S sudo nano`

We have to use nano to edit the configuration so we can log in with our new user we just created

- `EDITOR=nano visudo`

Scroll down until you see the `root ALL=(ALL) ALL`. Below that add this:

- yourusername ALL=(ALL) ALL

<h2>Installing the Desktop Enviroment (KDE PLASMA)</h2>
To run KDE desktop, you need the following packages:
- Xorg, KDE Plasma, Wayland and KDE Applications

We will get all this with this command

- `pacman -S xorg plasma plasma-wayland-session kde-applications`

This will take a bit download. Once installed enabled the Display Manager and Network Manager with these commands:

- `systemctl enable sddm.service`
- `systemctl enable NetworkManager.service`

<h2>Optional, Before Restarting (Can skip this process if you wish)</h2>
To remove the stock KDE browser that comes pre-packaged
- `sudo pacman -R konqueror`

Then we can replace it with Firefox

- `sudo pacman -S firefox`

For nvidia drivers if you need them

- `sudo pacman -S nvidia-utils`
- `sudo pacman -S nvidia-dkms`
- `sudo pacman -S nvidia-lts nvidia`

To install git to you can grab AUR packages later on

- `sudo pacman -S git`

We need to install some things before using the AUR:

- `sudo pacman -Sy base-devel`

Now we have git installed if you need NodeJS installed follow this:

- `git clone https://aur.archlinux.org/nvm.git`
- `cd nvm && makepkg -si`

This will install Node Version Manager and we can use this to get the latest version of nodejs and npm but first we need to do a few things.

- `echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.bashrc`
- `exec $SHELL`

Now we can list all the availible versions for nodejs and npm

- `nvm ls-remote`

Install whatever version you want. In this case we will download the latest version at this time

- `nvm install 14.10.0`
- `npm version` or type `npm -v` then `node -v` to verify correct version

The script is attached to this repository. To use the python script to fetch the above applications:
Before downloading the folling quick script to download the above applications and tools, we will need nodejs, npm and base-devel installed. Also I recommend changing the mirros to your local country like so:

- `sudo pacman-mirrors --country United_States && sudo pacman -Syyu`
- this will speed up the download speed by a lot then install nodejs npm and base-devel in order for package script to work! Only download npm this way if you didn't used the nvm method above!
- `sudo pacman -Sy nodejs npm base-devel`

<h2>To install some developer applications and tools here is a npm package that has a ton of useful tools. I have attached two methods to getting this package. Visit https://github.com/quelchlax/architech for more information:</h2>

The following above package downloads the following:

- Google Chrome
- Github Desktop
- Visual Studio Code
- Git (If you dont already have it)
- Caffeine
- VueJS CLI
- Ruby Sass
- Python and Pip
- Scrapy (Python Web Scraper CLI)
- Neofetch

<h2>Quick Web Developer Arch Start</h2>

- `git clone https://github.com/quelchlax/arch-install.git
- `cd arch-install && python3 install.py`

You will be prompt with simple [Y/n] questions to install the packages and thats about it. I have used this in the past with setting up arch and manjaro on various devices of mine rather than resorting the the software store installed or snap packages.

For the gamers out there. If you wish to install Steam and Flatpak follow this link. https://linuxhint.com/install_steam_arch_linux/

**Finishing up**

Once this is all done we can simply type **`exit`** then **`shutdown now`** and you should be able to reboot and log in with out any issues.

**Additional Information on AUR packages:**

If there is an application that you might seek google AUR packages. Say if you want google chrome for your browser. Type in google chrome AUR. Copy the `Git Clone URL` in the description on the page and put this into your terminal. I will use google chrome as an example https://aur.archlinux.org/packages/google-chrome/

- `git clone https://aur.archlinux.org/google-chrome.git`
- `cd google-chrome && makepkg -si`

It's that simple. Cheers! Some sources of my information

#### Useful Links
https://itsfoss.com/install-arch-linux/

https://itsfoss.com/install-kde-arch-linux/
