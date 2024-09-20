class incrementdecrement
{
	public static void main(String args[])
	{
		int a = 12;
		int b = 13;
		int c = 14;
		int d = a-- * a++ + ++b - --c * b++;
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
	}
}