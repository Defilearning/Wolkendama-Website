import BlogPost from "../../Utils/BlogPost";

const DUMMY_DATA = [
  {
    id: "id1",
    title: "Test1",
    descriptions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquid dolorum dolor sapiente similique neque dignissimos expedita eligendi minus mollitia in autem ad reprehenderit. Qui saepe dolores itaque! Architecto, doloribus?",
    date: "17/10/2022",
    imgCover: "https://picsum.photos/300/400",
  },
  {
    id: "id2",
    title: "Test2",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    date: "16/10/2022",
    imgCover: "https://picsum.photos/300/400",
  },
  {
    id: "id3",
    title: "Test3",
    descriptions:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at ultricies justo.",
    date: "10/10/2022",
    imgCover: "https://picsum.photos/300/400",
  },
];

const HomeBlog = () => {
  return (
    <div className="flex flex-col items-center py-32 text-white">
      <h1 className="text-6xl mb-16">Latest Blog Post</h1>
      <div className="flex overflow-x-hidden">
        <BlogPost
          id={DUMMY_DATA.at(0).id}
          title={DUMMY_DATA.at(0).title}
          descriptions={DUMMY_DATA.at(0).descriptions}
          date={DUMMY_DATA.at(0).date}
          imgCover={DUMMY_DATA.at(0).imgCover}
        />
      </div>
    </div>
  );
};

export default HomeBlog;
