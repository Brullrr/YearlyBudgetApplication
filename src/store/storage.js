// const storage = {
//     setItem: function (key, value) {
//         console.log('Item was set');
//         return Promise.resolve().then(function () {
//             localStorage.setItem(key, value);
//         });
//     },
//     getItem: function (key) {
//     console.log('Item was get');
//         return Promise.resolve().then(function () {
//             return localStorage.getItem(key);
//         });
//     },
//     removeItem: function (key) {
//     console.log('Item was remove');
//         return Promise.resolve().then(function () {
//             return localStorage.removeItem(key);
//         });
//     }
// };

const storage = {
        setItem: function (key, value) {
            console.log('Item was set');
            return Promise.resolve().then(function () {
                
                    fetch('https://yearly-budget-4e477-default-rtdb.firebaseio.com/state.json').then(response => {
                            return response.json()
                    }).then ( data => {
                        return data[Object.keys(data)[Object.keys(data).length - 1]]
                    }). then( dataCheck => {
                        if(value != dataCheck) { 
                            
                            fetch('https://yearly-budget-4e477-default-rtdb.firebaseio.com/state.json', {
                                method: 'POST',
                                body:JSON.stringify(value),
                                headers:{
                                'Content-Type' : 'application/json'
                                }
                            });
                        } else {
                            console.log('state is same');
                        }
                    })    
            });
        },
        getItem: function (key) {
        console.log('Item was get');
            return Promise.resolve().then(function () {
                return fetch('https://yearly-budget-4e477-default-rtdb.firebaseio.com/state.json').then(response => {
                    return response.json();
                }).then(data => {return data[Object.keys(data)[Object.keys(data).length - 1]] })
                
            });
        },
        removeItem: function (key) {
        console.log('Item was remove');
            return Promise.resolve().then(function () {
                console.log('nothing happens');
            });
        }
    };

export default storage;