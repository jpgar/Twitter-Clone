import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";


export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Juan",
            username: "juangarc",
            userImg: "https://pbs.twimg.com/profile_images/1275011169628160000/PvZw734h_400x400.jpg",
            img: "https://images.unsplash.com/photo-1660659236367-710aa4ae7e19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            text: "nice",
            timesstamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Pablo",
            username: "Pablogarc",
            userImg: "https://pbs.twimg.com/profile_images/1275011169628160000/PvZw734h_400x400.jpg",
            img: "https://images.unsplash.com/photo-1660564729192-ea330bfd800f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
            text: "wow",
            timesstamp: "2 weeks ago"
        },
    ]
    return (
        <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">

            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">

                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                    <SparklesIcon className="h-5" />
                </div>
            </div>
            <Input />
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}
