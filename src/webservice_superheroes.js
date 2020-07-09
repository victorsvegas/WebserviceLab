import React, {Component} from 'react';
import axios from 'axios';
import superheroes from '../src/superheroes.png';

class WebserviceSuperheroes extends Component 
{
    // Api-key: 1669444993209592 

    state={
        id:'',
        name:'',
        aliases:'',
        publisher:'',
        alignment:'',
        gender:'',
        race:'',
        occupation:'',
        relatives:''
    }
    componentDidMount ()
    {
        // Creates a random variable to shuffle between the different superheroes in the URL using the ID.
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          
          var rnd = getRandomInt(700);
          console.log(rnd);

        axios.get(`https://www.superheroapi.com/api.php/1669444993209592/${rnd}`).then(res =>{
        console.log(res.data)
        this.setState({
            
            id:res.data.id,
            name:res.data.name,
            intelligence:res.data.intelligence,
           
            })
        })
            
            axios.get(`https://www.superheroapi.com/api.php/1669444993209592/${rnd}/biography`).then(res =>{
            console.log(res.data)
            
            this.setState({
                aliases:res.data.aliases,
                publisher:res.data.publisher,
                alignment:res.data.alignment
            })
        })
        
        axios.get(`https://www.superheroapi.com/api.php/1669444993209592/${rnd}/appearance`).then(res =>{
            console.log(res.data)
            
            this.setState({
                gender:res.data.gender,
                race:res.data.race
            })
        })

        axios.get(`https://www.superheroapi.com/api.php/1669444993209592/${rnd}/work`).then(res =>{
            console.log(res.data)
            
            this.setState({
                occupation:res.data.occupation
            })
        })

        axios.get(`https://www.superheroapi.com/api.php/1669444993209592/${rnd}/connections`).then(res =>{
            console.log(res.data)
            
            this.setState({
                relatives:res.data.relatives
            })
        })
    }
    
    render(){
        return(
              <div>
                <div className="center">
                    <h1>Random superhero generator</h1>
                    <p>Each time you refresh the page a new superhero will show!</p>
                    <img src={superheroes} alt="Superheroes" className="imgSuper"></img>
                </div>
                <div className="tableHolder">
                    <h1>Hero name: {this.state.name}</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td classsName="desc">Aliases: </td>
                                <td className="td1">{this.state.aliases}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Publisher: </td>
                                <td className="td1">{this.state.publisher}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Alignment: </td>
                                <td className="td1">{this.state.alignment}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Gender: </td>
                                <td className="td1">{this.state.gender}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Race: </td>
                                <td className="td1">{this.state.race}</td>
                            </tr> 
                            <tr> 
                                <td classsName="desc">Occupation: </td>
                                <td className="td1">{this.state.occupation}</td>
                            </tr>
                            <tr>
                                <td classsName="desc">Relatives: </td>
                                <td className="td1">{this.state.relatives}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>

        );
    }
}
export default WebserviceSuperheroes;