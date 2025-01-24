const Details = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json();
    console.log(post);
    return (
        <div className="max-w-lg mx-auto md:py-10 py-5 px-4 md:px-8 flex flex-col items-center justify-center min-h-screen">
            <div className="md:py-10 py-5 shadow-lg w-full rounded-md">
                <h1 className="md:text-2xl text-xl text-black font-semibold text-center">Details of Blog No. {post.id}</h1>
            </div>
            <div className="rounded-md bg-base-100 w-full shadow-lg p-4 flex flex-col mt-5">
                <div className="flex-1">
                    <h2 className="text-xl font-semibold">{post?.title}</h2>
                    <p className="mt-1">{post?.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Details