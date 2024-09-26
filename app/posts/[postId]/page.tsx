import React from 'react'

const page = ({ params }: { params: {postId: string}}) => {
  return (
    <div>
      ID: {params.postId}
    </div>
  )
}

export default page
