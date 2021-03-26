export const passwordCheck = (password) =>{
    let cleanedPassword = password.replace(" ","");
    const passwordRegex = new RegExp(/[^A-z0-9]/g);     // If not A-z or 0-9 produces a true
    return (cleanedPassword < 8 || passwordRegex.test(password))? false: true
} 