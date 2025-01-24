const { default: Link } = require("next/link");

const Blog = async() =>{
    const res = await fetch(' https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return (
      <div className="bg-base-200 min-h-screen">
        <div className="max-w-screen-2xl mx-auto py-10 px-4 md:px-8">
          <div className="md:py-10 py-5 bg-white rounded-md">
            <h1 className="md:text-3xl text-2xl text-black font-semibold text-center">Read All Blogs</h1>
          </div>
          <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
              data?.map((post) =>
                <div key={post.id} className="rounded-md bg-base-100 w-full shadow-xl p-4 flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{post?.title}</h2>
                  </div>
                  <div className="mt-5">
                    <Link href={`/blog/${post?.id}`}><button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-md">View Details</button></Link>
                  </div>
                </div>)
            }
          </div>
        </div>
      </div>
    );
}

export default Blog;