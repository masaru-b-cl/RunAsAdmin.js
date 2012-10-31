/// <reference path=".\WSH-vsdoc.js"/>
function runAsAdmin(target, arg) {
    /// <param name="target" type="String">To executing target file path.</param>

    // 別ユーザでbatファイルを実行
    var shell = new ActiveXObject("WScript.Shell");
    var curDir = shell.CurrentDirectory;

    var command = "runas /user:" + account + " \"cmd /k \\\"" + curDir + target + "\\\" " + arg + "\"";
    shell.Run(command);

    // コマンドプロンプトが立ち上がるまでWait
    WScript.Sleep(1000)

    // パスワードを自動入力
    shell.SendKeys(password)

    // Enterを自動入力
    shell.SendKeys("{enter}")
}