export default function filteredCategories(posts: any) {
  let temp: string[] = [];
  posts.forEach((post: any) => {
    post.data.category.forEach((category: any) => {
      temp.push(category);
    });
  });

  const categories = temp.filter((t, idx) => {
    return temp.indexOf(t) === idx;
  });

  return categories
}
