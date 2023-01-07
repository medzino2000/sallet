import './SABS.css'

const SABS = () => {
  return (
    <div className='sabs'>
      <h3>Get special Discounts</h3>
      <p>Input email address and complete your subscription to get our special offer.</p>
      <div className='inp'>
        <input type="email"  name="email" placeholder="sophie@example.com" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default SABS