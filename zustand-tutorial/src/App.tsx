import {useCounterStore} from './store/counterStore';
import {shallow} from 'zustand/shallow';
import { useEffect } from 'react';
import PostComponent from './components/PostComponent';

function App(){

  const initList = 0;
  const spanList = 10;
  
  const stateCounter =  useCounterStore(state=>state, shallow);
  const listData = stateCounter.posts.slice(initList, spanList)
  useEffect(()=>{
    stateCounter.getPost();
  },[])

  return (
    <div className='container'>
      <h1 className='text-white text-center'>
        {stateCounter.title}: {stateCounter.count}
      </h1>
      <button className='btn btn-success mx-2'
        onClick={()=> stateCounter.increment(2)}
      >
        Aumentar +2
      </button>
      <button className='btn btn-success mx-2'
        onClick={()=> stateCounter.rest(2)}
      >Restar -2</button>
      
      <button className='btn btn-success mx-2'
        onClick={()=> stateCounter.multiply(2)}
      >
        Multiply by 2
      </button>
      <button className='btn btn-success mx-2'
        onClick={()=> stateCounter.clearPost()}
      >
        Clear Posts
      </button>
      <button className='btn btn-success mx-2'
        onClick={()=> stateCounter.getPost()}
      >
        Get Posts
      </button>
      <hr />
      <div className='row'>
      {listData.map(item=>
        <PostComponent
          
          key={item.id}
          post={item}
        ></PostComponent>
      )}
      </div>
     
      <nav >
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li className="page-item">
          <button className="page-link">1</button>
        </li>
        <li className="page-item">
          <button className="page-link">2</button>
          </li>
        <li className="page-item">
          <button className="page-link">3</button>
        </li>
        <li className="page-item">
          <button className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
      {/*JSON.stringify(stateCounter.posts)*/}
    </div>
  )
}

export default App;