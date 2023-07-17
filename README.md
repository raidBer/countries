# THE RESULT

the result is deployed to : https://countries-berrahalraid.netlify.app/

# challenge description

The challenge is integrating with the REST Countries API to pull country data and display it.

The users should be able to:

See all countries from the API on the homepage
Search for a country using an input field
Filter countries by region
Click on a country to see more detailed information on a separate page
Click through to the border countries on the detail page
Bonus: Toggle the color scheme between light and dark mode

# technologies used

HTML
Tailwind CSS
React.JS

# what i learned

- how to properly use async await to fetch data from a server
- how to implement dark mode using tailwind CSS
- how to use useNavigate() react hook to navigate programmatically instead of using <Link> from react router
- how to use useParams() to return a page based on a dynamic URL
- event handlers life cycle

# some good practices to use in your projects

- define the object passed as props to make your code cleaner
- always check whether the data is fetched correctly and if the field contains data before trying to access it (for example some countries didn't have borders or capitals which is a special case you have to treat)
- always treat special cases (like removing israel and making jerusalem palestine's capital)
- start developing the mobile version first (tailwind is OP)
