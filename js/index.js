const BASE_URL = 'http://localhost:5001/vinci-dev-6e577/us-central1/api/public/onboardingview';


const fetchUsers = () => {
    axios.get("https://checkip.amazonaws.com/", { headers: { "Access-Control-Allow-Origin": "*" } })
        .then(res => res.text()).then(data => console.log(data))
    console.log(window.location.href.split('/')[window.location.href.split('/').length - 1]);
    axios.get(BASE_URL, {
        params: {
            url: window.location.href
        },

        headers: { "Access-Control-Allow-Origin": "*" }
    })
        .then(response => {
            const users = response.data.data;
            console.log(`GET list users`, users);
        })
        .catch(error => console.error(error));
};

fetchUsers();
