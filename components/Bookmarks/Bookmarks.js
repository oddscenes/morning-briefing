import { useEffect } from "react"

const links = [
  {title: process.env.LINK_ONE_TITLE, url: process.env.LINK_ONE_URL},
  {title: process.env.LINK_TWO_TITLE, url: process.env.LINK_TWO_URL},
  {title: process.env.LINK_THREE_TITLE, url: process.env.LINK_THREE_URL},
  {title: process.env.LINK_FOUR_TITLE, url: process.env.LINK_FOUR_URL},
  {title: process.env.LINK_FIVE_TITLE, url: process.env.LINK_FIVE_URL},
  {title: process.env.LINK_SIX_TITLE, url: process.env.LINK_SIX_URL},
  {title: process.env.LINK_SEVEN_TITLE, url: process.env.LINK_SEVEN_URL},
  {title: process.env.LINK_EIGHT_TITLE, url: process.env.LINK_EIGHT_URL},
]

function Bookmarks() {

  useEffect(() => {
    console.log(process.env.LINK_ONE_TITLE)
  }, [])

  return <div className="bg-purple-400 rounded-xl p-4 mb-6">
    <div className="grid grid-cols-4">

      {links.map((link, i) => <a
        className="col-span-1 bg-purple-300 m-2 rounded-lg
        border border-solid border-purple-200 text-white
        truncate py-4 px-4 text-sm"
        href={link.url}
        key={i}>

        <img
          src={`https://www.google.com/s2/favicons?domain=${link.url}`}
          className="float-left mr-3"
          style={{marginTop: '0.1rem'}}
        />

        {link.title}
      </a>)}
    </div>
  </div>
}

export default Bookmarks
