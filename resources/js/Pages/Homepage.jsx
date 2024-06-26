import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsList from "@/Components/Homepage/NewsList";
import Paginator from "@/Components/Homepage/Paginator"


export default function Homepage(props) {
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className="flex justify-center items-center gap-5 m-4 flex-col lg:flex-row lg:flex-wrap lg:items-stretch">
                <NewsList news={props.news.data}/>
            </div>

            <div className="flex justify-center items-center m-4">
                <Paginator meta={props.news.meta}/>
            </div>
            
        </div>
    )
}
