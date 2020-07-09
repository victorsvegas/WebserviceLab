import React, {Component} from 'react';
import axios from 'axios';

class WebserviceGroup extends Component 
{
    state={
        Aldergrans: '',
        Beskrivning: '',
        Genre: '',
        Huvudregissor: '',
        Speltid: '',
        Sprak: '',
        Titel: '',
        Utgivningsdatum: ''
    }
    componentDidMount ()
    {
        axios.get("http://193.10.202.71/Filmservice/film?id=98").then(res =>{
            console.log(res.data)
            this.setState({
                Aldergrans:res.data.Aldergrans,
                Beskrivning:res.data.Beskrivning,
                Genre:res.data.Genre,
                Huvudregissor:res.data.Huvudregissor,
                Speltid:res.data.Speltid,
                Titel:res.data.Titel,
                Sprak:res.data.Sprak,
                Utgivningsdatum:res.data.Utgivningsdatum,
                })
            })
        }
    render () 
    {
        return(
            <div>
                <h1>A movie i really want to see!</h1>
                <div className="tableHolder">
                    <h1>{this.state.Titel}</h1>
                     <table>
                        <tbody>
                            <tr>
                                <td classsName="desc">Genre: </td>
                                <td className="td1">{this.state.Genre}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Description: </td>
                                <td className="td2">{this.state.Beskrivning}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1>More info:</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td classsName="desc">Director: </td>
                                <td className="td1">{this.state.Huvudregissor}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Movie lenght: </td>
                                <td className="td1">{this.state.Speltid}</td>
                            </tr> 
                            <tr> 
                                <td classsName="desc">Language: </td>
                                <td className="td1">{this.state.Sprak}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Aired: </td>
                                <td className="td1">{this.state.Utgivningsdatum}</td> 
                            </tr>
                            <tr>
                                <td classsName="desc">Age limit: </td>
                                <td className="td1">{this.state.Aldergrans}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    
        )
    }
}
export default WebserviceGroup