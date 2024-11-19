const footerNavs = [
      {
          label: "Resources",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'contact'
              },
              {
                  href: 'javascript:void()',
                  name: 'Support'
              },
              {
                  href: 'javascript:void()',
                  name: 'Documentation'
              },
              {
                  href: 'javascript:void()',
                  name: 'Pricing'
              },
          ],
      },
      {
          label: "About",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Terms'
              },
              {
                  href: 'javascript:void()',
                  name: 'License'
              },
              {
                  href: 'javascript:void()',
                  name: 'Privacy'
              },
              {
                  href: 'javascript:void()',
                  name: 'About US'
              },
          ]
      },
      {
          label: "Explore",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Showcase'
              },
              {
                  href: 'javascript:void()',
                  name: 'Roadmap'
              },
              {
                  href: 'javascript:void()',
                  name: 'Languages'
              },
              {
                  href: 'javascript:void()',
                  name: 'Blog'
              },
          ]
      },
      {
          label: "Company",
          items: [
              {
                  href: 'javascript:void()',
                  name: 'Partners'
              },
              {
                  href: 'javascript:void()',
                  name: 'Team'
              },
              {
                  href: 'javascript:void()',
                  name: 'Careers'
              },
          ],
      }
  ]

  



const Footer = () => {
  return (
    <footer className="pt-10 bg-white">
    {/* <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
            {
                footerNavs.map((item, idx) => (
                    <ul
                        className="space-y-4 text-gray-300"
                        key={idx}
                    >
                        <h4 className="text-gray-200 font-semibold sm:pb-2">
                            {item.label}
                        </h4>
                        {
                            item.items.map(((el, idx) => (
                                <li key={idx}>
                                    <a
                                        href={el.href}
                                        className="duration-150 hover:text-gray-400"

                                    >
                                        {el.name}
                                    </a>
                                </li>
                            )))
                        }
                    </ul>
                ))
            }
        </div>
        
    </div> */}
    <div className="mt-10 py-10  items-center justify-between sm:flex">
            <p className="p-2 pl-6">© 2025 <span className="footer-logo cursor-pointer"> SHOP.CO</span> Inc. All rights reserved.</p>
           
        </div>
</footer>
)
}

export default Footer