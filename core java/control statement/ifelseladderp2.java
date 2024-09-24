class Ifelseladder2{
	public static void main(String args[]){
		int percentage = 35;
		if(percentage<=100 && percentage>=90){
			System.out.println("A+");
		}
		else if(percentage<=89 && percentage>=80){
			System.out.println("A");
		}
		else if(percentage<=79 && percentage>=70){
			System.out.println("B+");
		}
		else if(percentage<=69 && percentage>=60){
			System.out.println("B");
		}
		else if(percentage<=59 && percentage>=50){
			System.out.println("C+");
		}
		else if(percentage<=49 && percentage>=40){
			System.out.println("C");
		}
		else if(percentage<=39 && percentage>=35){
			System.out.println("Pass");
		}
		else{
			System.out.println("Fail");
		}
	}
}