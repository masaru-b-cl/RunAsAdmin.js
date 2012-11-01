RunAsAdmin
==========

execute "runas" command with any user and auto input password.

### how to use?
    // set runas account
    var account = new RunAsAdmin.Account("user", "password");
    // create command
    var command = new RunAsAdmin.Command(account);
    // run with target file and arguments
    command.run("notepad.exe", "test.txt");
