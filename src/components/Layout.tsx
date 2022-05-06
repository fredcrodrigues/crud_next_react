import Title from "./Title"

interface LayoutProps{
    title: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={` 
            flex flex-col w-2/3 
            bg-white  text-gray-900 rounded-md

        `}>
            <Title>{props.title}</Title>

            <div className="p-6">
                {props.children}
            </div>

        </div>
    )
}