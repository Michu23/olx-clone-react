import React, { useState, useContext, useEffect } from "react";
import { PostContext } from "../../store/PostContext";
import { FirebaseContext } from "../../store/Context";
import "./View.css";


function View() {

  const [ userDetails, setUserDeatils ] = useState();
  const { postDetails } = useContext(PostContext);
  const { Firebase } = useContext(FirebaseContext);


  useEffect(() => {
    const { userId } = postDetails;
    Firebase.firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          setUserDeatils(doc.data());
        });
      });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
  
          <p>{postDetails.catogery}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
