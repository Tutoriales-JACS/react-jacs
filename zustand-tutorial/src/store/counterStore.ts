
import {create} from 'zustand';
import { Post } from '../models/Post';




interface CounterState {
    count : number;
    title: string;
    posts : Post[];
    increment: (value:number)=> void;
    rest: (value:number)=> void;
    getPost: () => Promise<void>;
    clearStore : () => void;
    multiply: (value: number)=> void;
    clearPost : ()=> void;
}

export const useCounterStore = create<CounterState>((set, get)=>({
    count: 10,
    title: 'Mi Titulo',
    posts: [],
    increment: (value:number) => 
        set(state=>({
            count: state.count + value
        })),
    rest: (value:number) => 
        set(state=>({
            count: state.count - value
        })),
    getPost : async () =>{
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        set(state =>({
            posts : data
        }))
    },
    clearStore: ()=>{
        set({}, true)
    },
    multiply: (value:number) =>{
        const {count} =get()
        set({
            count: count * value
        })
    },
    clearPost: ()=>{
        set({posts:[]})
    },
}));