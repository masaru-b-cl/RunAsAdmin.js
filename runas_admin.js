/// <reference path=".\WSH-vsdoc.js"/>
function runAsAdmin(target, arg) {
    /// <param name="target" type="String">To executing target file path.</param>

    // �ʃ��[�U��bat�t�@�C�������s
    var shell = new ActiveXObject("WScript.Shell");
    var curDir = shell.CurrentDirectory;

    var command = "runas /user:" + account + " \"cmd /k \\\"" + curDir + target + "\\\" " + arg + "\"";
    shell.Run(command);

    // �R�}���h�v�����v�g�������オ��܂�Wait
    WScript.Sleep(1000)

    // �p�X���[�h����������
    shell.SendKeys(password)

    // Enter����������
    shell.SendKeys("{enter}")
}