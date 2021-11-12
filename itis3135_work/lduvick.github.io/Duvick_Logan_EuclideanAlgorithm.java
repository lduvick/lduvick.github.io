import java.util.Scanner;
import java.lang.Math;
/*
Logan Duvick
10/11/2021
Math 1165-001
Project 1
*/
public class Duvick_Logan_EuclideanAlgorithm{
   public static void main(String[] args) {
        int x=1;
        int y=1;
        int temp=0;
        int r=1;
        int euclidGCD=0;
        Scanner input=new Scanner(System.in);//Allowing the user to input the numbers
        System.out.println("Enter First Number: ");
        x=input.nextInt();//number input
        System.out.println("Enter Second Number: ");
        y=input.nextInt();
        x=Math.abs(x);//absolute value to ensure the numbers are positive
        y=Math.abs(y);
        
        if(x>y){//if x is larger than y then swap the numbers(basically ensuring the equation works properly)
            temp=x;
            x=y;
            y=temp;
        }
        if(x==y){//If the numbers are the same then return x as it will be the greatest common divisor
            System.out.println(x);
        }
        

        while(r!=0){//looping until the remainder is 0
            if(x==0 && y==0){
                System.out.println("Undefined");//If both numbers are 0 then return undefined.
                break;
            }else if(x==0){
                System.out.println("The GCD of the two numbers is: "+y);
                break;
            }else if(y==0){
                System.out.println("The GCD of the two numbers is: "+x); 
                break;           
            }
            
            r=y%x;//determine the remainder
            temp=y/x;//getting the value of how many times x goes into y 
            System.out.println(y+"="+x+"("+temp+")"+"-"+r);//displaying the formula before 
            if(r!=0){
            y=x;//Moving x over to the y position
            x=r;
            }
        }
        if(r==0){
            euclidGCD=x;
            System.out.println("The GCD of the two numbers is: " +euclidGCD);
        }
    }
}