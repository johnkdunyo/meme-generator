import React, {useState, useEffect } from 'react';
import memeApi from '../apis';



function MemeText() {

    const [inputText1, setInputText1 ] = useState('');
    const [inputText2, setInputText2 ] = useState('');
    const [clickedButton, setClickedButton] = useState('');



    const inputText = inputText1.concat(" ", inputText2);
    console.log(inputText);


    useEffect(() => {
        //console.log('input text changed')

        async function getMeme() {
            const response = memeApi.get('/')
            .catch(error => {
                console.log(error)
            });
            console.log(response);
        };

        getMeme();        
    }, [clickedButton])


    



    return (
        <React.Fragment>
                <div className="ui container">

                <div className="ui two column centered grid">
                    
                    <div className="four column centered row">
                        <div className="column">
                            <div className='ui form'>
                                <div className="field">
                                    <input 
                                        type='text' 
                                        value = {inputText1}  
                                        onChange={(e)=> setInputText1(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className='ui form'>
                                <div className="field">
                                    <input 
                                        type="text"
                                        value={inputText2}
                                        onChange={(e)=> setInputText2(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <button className='fluid ui  purple button' onClick={() => setClickedButton()}>Generate MEME</button>

                        <div className='centered card'>
                            <div className="red card">
                                <div className="image">
                                    <img src="/images/smaple-meme.jpg" alt="meme_picture" style={{marginTop: '1.5rem' , height: '100%', width: '100%'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                              
                    
                </div>
            </React.Fragment>
    )
}

export default MemeText
