
export async function POST(req){
    console.log(typeof(req));

    const formData = await req.formData();
    console.log(formData.get("title"));
    console.log(formData.get("content"));
    return new Response('hi',{
        status:200
    });
}