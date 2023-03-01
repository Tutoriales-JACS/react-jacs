import { Post } from '../models/Post';

interface DataPost{
    post: Post
}

function PostComponent(prop:DataPost){
    return(
        <div className='p-2 col-md-6 col-lg-4'>
            <div className='card h-100'>
                <div className="card-header">
                    <h3 className='text-uppercase text-center'>
                        {prop.post.title}
                    </h3>
                </div>
                <div className="card-body">
                <p>{prop.post.body}</p>
                </div>               
            </div>
        </div>
       
    )
}

export default PostComponent;