'use client'
import React from 'react'


const BlogMain = () => {

    return (

        <div className="p-4 my-6">

            <div>
                <h1 className="text-4xl font-bold text-center py-8">Welcome to the Tuneo Blog</h1>
                <div className='py-4'>

                    <div className="hero min-h-[150px] bg-base-200 mb-8 rounded-lg">
                        <div className="hero-content flex-col md:flex-row">
                            <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                                <img src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F5e7bf410789d01a90983b2641b88e5bd.1000x1000x1.png" alt="Blog Title" className="max-w-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">Billie Eilish - HIT ME HARD AND SOFT</h1>
                                    <p className="py-2">Billie Eilish releases new album &#34;HIT ME HARD AND SOFT&#34;. Read our review</p>
                                    <label htmlFor="my_modal_1" className="btn btn-primary">Click to View</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_1" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <img src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F5e7bf410789d01a90983b2641b88e5bd.1000x1000x1.png" alt="Description of the image" className="w-full h-auto rounded-xl" />
                            <h3 className="text-lg font-bold underline mt-4">Billie Eilish - HIT ME HARD AND SOFT</h3>
                            <p className="py-4">Billie Eilish new album, titled &#34;Hit Me Hard and Soft&#34; is set to be released on May 17, 2024. This will be her third studio album, following &#34;When We All Fall Asleep, Where Do We Go?&#34; (2019) and &#34;Happier Than Ever&#34; (2021). The album was created in collaboration with her brother Finneas, who co-wrote and produced all the tracks.</p>
                            <p className="btn btn-primary">Rating - 7/10</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_1">Close</label>
                    </div>

                </div>

                <div className="hero min-h-[150px] bg-base-200 mb-8 rounded-lg">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                            <img src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe12443c54afc4273bc29ca42b970a279.1000x1000x1.jpg" alt="Blog Title" className="max-w-72 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl font-bold">Chance Is Back</h1>
                                <p className="py-2">Chance the Rapper is back with new music. But is to too late for a comback?</p>
                                <label htmlFor="my_modal_2" className="btn btn-primary">Click to View</label>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="checkbox" id="my_modal_2" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <img src="https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2Fe12443c54afc4273bc29ca42b970a279.1000x1000x1.jpg" alt="Description of the image" className="w-full h-auto rounded-xl" />
                        <h3 className="text-lg font-bold underline mt-4">Chance the Rapper - Together</h3>
                        <p className="py-4">Chance the rappers new song titled &#34;Together&#34; is his secound release of 2024. The song has strong subjects about keeping family close and to cherish the time you have with your family. The sonud is reminiscent to that of Coloring Book and is a step in the right direction. But im afraid it is too late for a comback for the Chicago rapper.</p>
                        <p className="btn btn-primary">Rating - 4/10</p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_2">Close</label>
                </div>
            </div>

        </div>
    );
};

export default BlogMain;
