// import React, { useState } from "react";
// import style from "./style.module.css";

// const Post = ({ post, deletePost, favoritePost }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div className={post.fav ? style.greenPost : style.post}>
//       <div className={style.postId}>{post.id}</div>
//       <div className={style.postName}>{post.name}</div>
//       <button onClick={() => setShowMenu(!showMenu)}>Menu</button>
//       <div className={showMenu ? style.postMenu : style.hidden}>
//         <button onClick={() => deletePost(post.id)}>Delete</button>
//         <button onClick={() => favoritePost(post.id)}>
//           {post.fav ? "Delete from favorite" : "Add to favorite"}
//         </button>
//         <button>Edit</button>
//       </div>
//     </div>
//   );
// };

// export default Post;
import React, { useState } from "react";
import style from "./style.module.css";

const Post = ({ post, deletePost, favoritePost, updatePost }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editedName, setEditedName] = useState(post.name);

  const handleEdit = () => {
    updatePost(post.id, editedName);
    setShowModal(false);
  };

  return (
    <div className={post.fav ? style.greenPost : style.post}>
      <div className={style.postId}>{post.id}</div>
      <div className={style.postName}>{post.name}</div>
      <button className={style.btnMenu} onClick={() => setShowMenu(!showMenu)}>
        Menu
      </button>
      <div className={showMenu ? style.postMenu : style.hidden}>
        <button className={style.btnDelete} onClick={() => deletePost(post.id)}>
          Delete
        </button>
        <button className={style.btnFav} onClick={() => favoritePost(post.id)}>
          {post.fav ? "Delete from favorite" : "Add to favorite"}
        </button>
        <button className={style.btnEdit} onClick={() => setShowModal(true)}>
          Edit
        </button>
      </div>

      {showModal && (
        <div className={style.modal}>
          <div className={style.editTitle}>Edit Post</div>
          <input
            className={style.editChange}
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button className={style.editSave} onClick={handleEdit}>
            Save
          </button>
          <button
            className={style.editCancel}
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
