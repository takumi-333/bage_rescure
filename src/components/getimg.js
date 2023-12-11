import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL} from "firebase/storage";
import { storage } from '../firebase';

export function Getimg(post) {
  const gsReference = ref(storage, "gs://first-firebase-7494d.appspot.com" + post.thumbnail_url); 
  const [imgurl, setImgurl] = useState(null);
  useEffect(() => {
    if (post.thumbnail_url) {
        getDownloadURL(ref(storage, post.thumbnail_url))
        .then((url) => {
            setImgurl(url);
        })
        .catch((error) => {
            console.log(error);
        });
    }
  }, [post]);
  return (
    <img src={imgurl} alt='post' />
  )
}

export function Get_image(post) {
    const gsReference = ref(storage, "gs://first-firebase-7494d.appspot.com" + post.img_url);
    const [imgurl, setImgurl] = useState(null);
    console.log("wrong url:" + post.img_url);
    useEffect(() => {
        if (post.img_url) {
            getDownloadURL(ref(storage, post.img_url))
            .then((url) => {
                setImgurl(url);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        else {
            console.log("not exist img_url");
        }
    }, [post]);

    return (
      <img src={imgurl} alt='step' className="w-6/12" />
    );
  }