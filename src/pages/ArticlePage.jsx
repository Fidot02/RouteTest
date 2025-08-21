import React from 'react'
import { useParams } from 'react-router-dom'
import Article from '../components/Article'


const ArticlePage = () => {
    const { id } = useParams();
  return (
    <Article articleId={id}/>
  )
}

export default ArticlePage