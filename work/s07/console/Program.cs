using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic ;
namespace console
{
    class Program
    {
        static void Main(string[] args)
        {
            String input = "";
            while(!input.Equals("3")){
            Console.WriteLine("Welcome to you bank");
            Console.WriteLine("1. View Accounts\n2. View account by number\n3. Exit");
            Console.Write(">");
            input = Console.ReadLine();
            if(input.Equals("1")){
                var accounts = ReadAccounts();
                Console.Write(AccountsFormater(accounts));
            } else if(input.Equals("2")){
                var accounts = ReadAccounts();
                Console.WriteLine("Insert id for account\n>");
                input = Console.ReadLine();
                int inputAsNumber = Int32.Parse(input);
                foreach(var account in accounts){
                    if(account.Number.Equals(inputAsNumber)){
                        Console.Write(AccountFormater(account));
                    }
                }
            }
            
            }
        }

        static string AccountFormater(Account account){

                string fancyString =
                    "+--------+---------+-----------+-------+\n"+
                    "| Number | Balance |   Label   | Owner |\n"+
                    "+--------+---------+-----------+-------+\n";
                    
                    fancyString += account.niceFormat();
                    fancyString += 
                    "+--------+---------+-----------+-------+\n";
                    return fancyString;
        }


        static string AccountsFormater(IEnumerable<Account> accounts){

                string fancyString =
                    "+--------+---------+-----------+-------+\n"+
                    "| Number | Balance |   Label   | Owner |\n"+
                    "+--------+---------+-----------+-------+\n";
                    foreach(var account in accounts)
                        fancyString += account.niceFormat();
                    fancyString += 
                    "+--------+---------+-----------+-------+\n";
                    return fancyString;
        }

        static IEnumerable<Account> ReadAccounts()
        {
            String file = "../../data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                return json;
            }
        }
    
    
    public class Account
    {
        public int Number { get; set; }
        public int Balance { get; set; }
        public string Label { get; set; }
        public int Owner { get; set; }
        
        public override string ToString() {
            return JsonSerializer.Serialize<Account>(this);
        }

        public string niceFormat(){
            return String.Format("| {0,6} | {1,7} | {2,9} | {3,5} |\n", Number, Balance, Label, Owner);
        }
    }}


}
