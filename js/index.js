const BASE_URL = 'https://us-central1-vinci-dev-6e577.cloudfunctions.net/api/public/onboardingview';


const fetchUsers = () => {
    console.log(window.location.href.split('/')[window.location.href.split('/').length - 1]);
    console.log(window.location.href);
    axios.get(BASE_URL, {
        params: {
            url: window.location.href,
            API_KEY: 'VINCI_DEV_6E577'
        },
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            const users = response.data.data;
            console.log(`GET list users`, users);
        })
        .catch(error => console.error(error));
};

fetchUsers();
