/// <reference path="WSH-vsdoc.js" />
var RunAsAdmin;
(function (RunAsAdmin) {
  var Account = (function () {
    function Account(user, password) {
      /// <param name="user" type="String">run as user.</param>
      /// <param name="password" type="String">run as password.</param>

      this.user = user;
      this.password = password;
    }

    return Account;
  })();
  RunAsAdmin.Account = Account;

  var Invoker = (function () {
    function Invoker(account) {
      /// <param name="account" type="String">run as account.</param>

      this.account = account;
    }

    Invoker.prototype.execute = function (target, args) {
      /// <param name="target" type="String">To executing target file path.</param>
      /// <param name="args" type="String">Target file arguments.</param>

      var shell = new ActiveXObject("WScript.Shell");

      var command = "runas /user:" + this.account.user + " \"cmd /k \\\"" + target + "\\\" " + args + "\"";

      shell.Run(command);

      // wait for opening command prompt
      WScript.Sleep(1000)

      // input password
      shell.SendKeys(this.account.password)
      shell.SendKeys("{enter}")
    };

    return Invoker;
  })();
  RunAsAdmin.Invoker = Invoker;
})(RunAsAdmin || (RunAsAdmin = {}));

// var account = new RunAsAdmin.Account("user", "password");
// var invoker = new RunAsAdmin.Invoker(account);
// invoker.execute("calc", "");
