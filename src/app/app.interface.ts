export interface IUserDetails {
    name: string,
    email: string,
    password: string,
    confirmPassword: string;
}

export interface product{
id:number,
title:string,
description:string
}
export interface productParent{
    limit:number,
    skip:number,
    total:number,
    products:product[],
}