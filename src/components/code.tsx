import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const code = () => {

    return (
        <div>

            <Parallax pages={2}>
                <ParallaxLayer
                    offset={0}
                    speed={0.5}
                    factor={4}
                    style={{
                        backgroundImage: 'url(https://i.pinimg.com/236x/7d/12/b0/7d12b00ab44ee4699f17089afee64a2d--phone-wallpapers.jpg)',
                        backgroundSize: 'cover',
                    }}
                    >
                </ParallaxLayer>

                {/* <ParallaxLayer
                    offset={1}
                    speed={1}
                    factor={4}
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1630696867805-74d6880c5dec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4OTE2MDE1fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)',
                        backgroundSize: 'cover',
                    }}
                    >
                </ParallaxLayer> */}

                <ParallaxLayer
                offset={0.9}
                speed={2}
                >
                    <h2 style={{fontSize: 100, color: "white"}}>Hello there</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default code;