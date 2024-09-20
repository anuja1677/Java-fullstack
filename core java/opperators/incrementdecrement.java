class Incermentdecremet
{
	public static void main(String args[])
	{
		int a = 10;
		int b = 20;
		int c = a++ + b++ + ++a * --a;
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
	}
}