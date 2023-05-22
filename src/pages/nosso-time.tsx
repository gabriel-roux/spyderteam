import { Banner } from '@/styles/home'
import { Games, GamesContainer, OurTeam, OurTeamContent } from '@/styles/nosso-time'
import Image from 'next/image'
import OutTeam from '../assets/nossoTime.png'

import Game1 from '../assets/games/1.png'
import Game2 from '../assets/games/2.png'
import Game3 from '../assets/games/3.png'
import Game4 from '../assets/games/4.png'
import Game5 from '../assets/games/5.png'
import Game6 from '../assets/games/6.png'
import TeamExample from '../assets/team.png'

export default function NossoTime() {

    return (

        <div>

            <Banner>
                <Image
                    src={OutTeam}
                    alt=''
                    quality={100}
                />
            </Banner>

            <Games>
                <GamesContainer>
                    <div className='box'>
                        <Image
                            src={Game1}
                            alt=''
                        />

                        <div className='gradient' />
                        <div className='informations'>
                            <h1>League of Legends</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Image
                            src={Game2}
                            alt=''
                        />

                        <div className='gradient' />
                        <div className='informations'>
                            <h1>Apex Legends</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Image
                            src={Game3}
                            alt=''
                        />

                        <div className='gradient' />
                        <div className='informations'>
                            <h1>Counter Strike</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Image
                            src={Game4}
                            alt=''
                        />
                        <div className='gradient' />
                        <div className='informations'>
                            <h1>World of Warcraft</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Image
                            src={Game5}
                            alt=''
                        />

                        <div className='gradient' />
                        <div className='informations'>
                            <h1>Dota 2</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                    <div className='box'>
                        <Image
                            src={Game6}
                            alt=''
                        />

                        <div className='gradient' />
                        <div className='informations'>
                            <h1>Fortnite</h1>
                            <p>6 Jogos</p>
                        </div>
                    </div>
                </GamesContainer>
            </Games>

            <OurTeam>
                <OurTeamContent>
                    <h1>Todo nosso <span style={{ color: '#DB00FF' }}>time:</span></h1>

                    <div className='content'>
                        <div className='box'>
                            <Image
                                src={TeamExample}
                                alt=''
                            />
                            <h2>FORTNITE</h2>
                            <p>LELEO</p>
                        </div>
                        <div className='box'>
                            <Image
                                src={TeamExample}
                                alt=''
                            />
                            <h2>FORTNITE</h2>
                            <p>LELEO</p>
                        </div>
                        <div className='box'>
                            <Image
                                src={TeamExample}
                                alt=''
                            />
                            <h2>FORTNITE</h2>
                            <p>LELEO</p>
                        </div>
                        <div className='box'>
                            <Image
                                src={TeamExample}
                                alt=''
                            />
                            <h2>FORTNITE</h2>
                            <p>LELEO</p>
                        </div>
                    </div>
                </OurTeamContent>
            </OurTeam>

        </div>

    )

}