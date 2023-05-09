import style from "./write.module.css";

export default function Write(){
    return (
        <div className="p-20">
            <h4 className={style.headTitle}>Write Form</h4>
            <form action="/api/posts" method='POST' className={style.form}>
                <label htmlFor="title" className={style.label}>Title</label>
                <input name="title" id="title" type='text' className={style.textInput}/>
                <label className={style.label} htmlFor="title">Content</label>
                <input name="content" id="content" type='text' className={style.textInput} />
                <button type='submit' className={style.button}>Button</button>
            </form>
        </div>
    )
}