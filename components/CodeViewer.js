import { useState } from "react"

export default function CodeViewer(props) {
    const { languages, prompt, code } = props;
    const [editorView, setEditorView] = useState('code');
    const [language, setLanguage] = useState('python');

    const switchEditorView = () => {
        setEditorCodeView(!editorCodeView);
    }

    return (
        <div className='codeViewer'>
            <div className='codeViewer--dayPicker'>
                <h1>Day</h1>
                <select>
                    <option>1</option>
                </select>
            </div>
            <div className='codeViewer--codeToggler'>
                <h2 className={editorView == 'code' && 'active'} onClick={() => setEditorView('code')}>code</h2>
                <span>|</span>
                <h2 className={editorView == 'prompt' && 'active'} onClick={() => setEditorView('prompt')}>prompt</h2>
            </div>
            <div className='codeViewer--editorWrapper'>
                <pre className='codeViewer--editor'>
                    {editorView == 'code' ? code.split('\n').map((line, i) => {
                        return (<code key={i}>{line}</code>)
                    })
                        : (
                            prompt.split('\n').map((line, i) => {
                                return (<code key={i}>{line}</code>)
                            })
                        )}
                </pre>
                <ul className='codeViewer--editorWrapper--languagePicker'>
                    {
                        languages.map((lang, i) => {
                            return (
                                <li
                                key={i}
                                className={language == lang && 'active'}
                                onClick={()=>setLanguage(lang)}
                                >{lang}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}