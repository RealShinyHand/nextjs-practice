export default function Write(){
    return (
        <div className="p-20">
            <h4>Write Form</h4>
            <form action="/api/posts" method='POST'>
                <label for="title">Title</label>
                <input name="title" id="title" type='text'/>
                <label for="title">Content</label>
                <input name="content" id="content" type='text'/>
                <button type='submit'>Button</button>
            </form>
        </div>
    )
}