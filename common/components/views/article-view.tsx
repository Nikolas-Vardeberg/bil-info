import { Card } from "@/ui/card";
import RichText from "../RichText";
import SanityImage from "../SanityImage";
import OnThisPage from "../on-this-page";

export default async function ArticleView({ data }: { data: any }) {
    return(
        <>
        <div className="bg-green-100">
            <div className="w-full py-12 sm:py-20">
                <div className="flex flex-col gap-8 max-w-[1200px] mx-auto px-8">
                   
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-8">
                        <Card className="h-fit hidden md:block top-12 sticky">
                            <OnThisPage value={data.content ?? []} />
                        </Card>
                        <Card className="w-full h-fit rounded-xl overflow-hidden col-span-full md:col-span-2">
                            <SanityImage 
                                image={data.mainImage}
                                height={600}
                                width={1200}
                            />
                            <div className="p-4 flex flex-col gap-4">
                                <h1 className="text-2xl sm:text-4xl underline">{data.title}</h1>
                                <RichText blocks={data.entry ?? []} elementClassName="lead" />
                                <RichText blocks={data.content} />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}