import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Links from 'next/link'


//working on adding tailwind to new login page
export default function Home() {
      return (
        <div className="flex justify-end content-center">
          <div className="align-middle">
            <div className="">
              <h1 className="">Login</h1>
              <p>Enter email and password to login</p>
              </div>
              <div>
                <span className='flex'>
                  <button >Login</button>
                  <button>Register</button>
                </span>
              <form>
                <span className='flex flex-col'>
                  <label>
                  <h3>Email Address</h3>
                </label>
                <input type={'text'}></input>

                <label>Password</label>
                <input></input>
                </span>
               
                </form>
                
                
              </div>
              </div>
        </div>
      )
    }
