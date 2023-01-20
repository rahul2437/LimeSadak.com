import React from 'react'
import MyFeed from '../../components/myFeed/MyFeed'
import style from './Home.module.css'
import {Link} from 'react-router-dom'
import HomeBox from '../../components/homeBox/HomeBox'

const feedData=[
  {
    img:"https://img0.junaroad.com/images/icons/men/winter.png",
    title:"WINTER"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/tshirts.png",
    title:"T-SHIRT"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/shirts.png",
    title:"SHIRTS"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/jeans.png",
    title:"JEANS"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/trousers.png",
    title:"TROUSERS"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/ethnicsets.png",
    title:"ETHNIC SETS"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/footwear.png",
    title:"FOOTWEAR"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/kids.png",
    title:"KIDS"
  },
  {
    img:"https://img0.junaroad.com/images/icons/women/home.png",
    title:"HOME"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/accessory.png",
    title:"ACCESSORY"
  },
  {
    img:"https://img0.junaroad.com/images/icons/men/winter.png",
    title:"WINTER"
  },
]

const box=[
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63b6a282fd1d3c18522ef87b-1672991609.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63b7eacecc8b5e081af9847b-1673860623.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63b683d013cb38081c3a1a68-1673860769.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63b6830ffd1d3c18522ec047-1673860871.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63a9391a13cb38081c75e4a1-1672997257.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63c50384f38057081856f28a-1673860919.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63c5067d13cb380826399154-1673860669.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63ad546af47b70082aa07d72-1672997440.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63bbc337adb8b86e86a163ed-1673892334.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63abfed613cb38082866553b-1672221247.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63a3b451adb8b82d0e0f4675-1672181755.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63ae6641adb8b84ef73d4c15-1672907338.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63bbc7a7cc8b5e082d248dcc-1673860725.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63a93b62b388b0081843eed5-1672997284.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63b7ed9bf3805708269bef63-1673860550.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63be668ef47b7008346d21de-1673611761.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63a95cd5f3805708227a5a64-1672997326.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63a5712cadb8b82d0e11d5d1-1672991666.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63ad289a13cb38082a949255-1672360620.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63ac0218fd1d3c5cf644100c-1672979414.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63b68bd7fd1d3c18522ecb48-1673333935.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img0.junaroad.com/stories/story_p_63b688dbadb8b805f7c950b3-1672907434.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img2.junaroad.com/stories/story_p_63ac0811fd1d3c5cf6441b5c-1672779375.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  },
  {
    title:"CELEBRITY STORY | #HERITAGEC",
    img:"https://img3.junaroad.com/stories/story_p_63a9356513cb38081c75dea5-1672991568.jpeg",
    pro:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
    name:"Kanika Crystal",
    followers:"29K"
  }
]

const Home = () => {
  return (
        <div className={style.main}>

          {/* Section - 1 */}
            <div className={style.section1}>
                <div>
                  <Link>WOMEN</Link>
                  <Link>MEN</Link>
                </div>
                <div className={style.feed}>
                  {
                    feedData.map((item)=>{
                      return <MyFeed img={item.img} title={item.title} />
                    })
                  }
                </div>
                
            </div>

            {/* Section - 2 */}
            <div className={style.section2}>
              <div className={style.top}>
                <p>	
Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/ Net Banking/ Any Credit or Debit Card</p>
              </div>
              <div className={style.bottom}>
                
                  <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1674044135107.jpg?crsl_pos=0" alt="" />
                  <img src="https://img0.junaroad.com/images/banners/B2G1_13january2023_1673587401792.jpg?crsl_pos=0" alt="" />
              
              </div>
            </div>

            {/* Section - 3 */}
            <div className={style.section3}>
              {
                box.map((el)=>{
                  return <HomeBox 
                  img={el.img}
                  title={el.title}
                  pro={el.pro}
                  name={el.name}
                  followers={el.followers}
                  />
                })
                
              }
            </div>
        </div>
    
  )
}

export default Home

