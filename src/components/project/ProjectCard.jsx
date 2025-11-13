import React from 'react'

const ProjectCard = (props) => {
  return (
<>
<div className="w-1/2 h-full group relative hover:rounded-4xl overflow-hidden transition-all">
          <img
            className="h-full w-full object-cover"
            src={props.image1}
          />
          <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/20">
            <h2 className="uppercase text-3xl border-4 p-2 text-white border-white rounded-full">
              BEAUTY & FASHION
            </h2>
          </div>
        </div>
        <div className="w-1/2 h-full group relative hover:rounded-4xl overflow-hidden transition-all">
          <img
            className="h-full w-full object-cover"
            src={props.image2}
            alt=""
          />
          <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/20">
            <h2 className="uppercase text-3xl border-4 p-2 text-white border-white rounded-full">
               WONDERFUL JEWELLERY
            </h2>
          </div>
        </div>
</>

  )
}

export default ProjectCard;