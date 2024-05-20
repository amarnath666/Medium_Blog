import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/BlogCard";
import { Blog } from "../hooks";

export const FullBlog = ({blog}: {blog: Blog}) => {
    return<div>
        <Appbar />
        <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2x1">
                    <div className="bg-red-200 col-span-8">
                        <div className="text-3xl font-extrabold">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-4">
                            Post on 2nd May 2024
                        </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-slate-600 text-lh">
                        Author
                        </div>
                        
                        <div className="flex w-full">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                            </div>
                        </div>
                    </div>
                        <div className="text-xl font-bold">
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className="pt-2 text-slate-500">
                            Once upon a time in a whimsical land nestled between rolling hills 
                            and babbling brooks, there lived a peculiar creature named Bartholomew. 
                            Bartholomew wasn't your ordinary resident of the forest; he was a wizened 
                            old owl with a penchant for collecting shiny objects.
                        </div>
                </div>
            </div> 
        </div>
}