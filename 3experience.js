/*
You are playing an RPG game. Currently your experience points (XP) total is equal to experience .
To reach the next level your XP should be at least at threshold . If you kill the monster in front of
you, you will gain more experience points in the amount of the reward .
Given values experience , threshold and reward , check if you reach the next level after killing
the monster
*/
function solution(experience = 10 , threshold = 15 ,reward = 5 ){
    return result = ((experience+reward) >= threshold )? true : false ;
}