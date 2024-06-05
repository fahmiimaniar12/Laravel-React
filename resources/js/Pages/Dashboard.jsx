import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';


export default function Dashboard({ auth}) {
    const { post } = useForm({});

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const [loading, setLoading] = useState(false)
    const {errors} = usePage().props
    const {flash} = usePage().props

    const handelSumbmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {title, description, category};
        post(route('news.store', data),{
            onFinish: () => setLoading(false)
        });
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Daftar Berita</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flash && flash.message && 
                                <div role="alert" className="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{flash.message}</span>
                              </div>
                            }
                            <form onSubmit={handelSumbmit}>
                                {errors.title &&
                                <div className="flex gap-3 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{errors.title}</span>
                                </div>
                                }
                                <input type="text" placeholder="Type here" value={title} name="title" className="input input-bordered w-full my-3" onChange={(e) => setTitle(e.target.value)}/>

                                {errors.description &&
                                <div className="flex gap-3 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{errors.description}</span>
                                </div>
                                }
                                <input type="text" placeholder="Type here" value={description} name="description" className="input input-bordered w-full my-3" onChange={(e) => setDescription(e.target.value)}/>

                                
                                {errors.category &&
                                <div className="flex gap-3 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{errors.category}</span>
                                </div>
                                }
                                <input type="text" placeholder="Type here" value={category} name="category" className="input input-bordered w-full my-3" onChange={(e) => setCategory(e.target.value)}/>

                                <div className='flex justify-end my-3'>
                                    <button className="btn btn-outline left-0 w-full" type='submit' disabled={loading}> Simpan </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
