(function() {
  interval = setInterval(function(){
    $head_tr = $('#gwt-debug-gridTable > div:nth-child(1) > div:nth-child(3) > table > thead > tr')
    instance_type_index = $head_tr.find('th').
      index($head_tr.find('th:contains("Instance Type")')) + 1

    $raws = $('#gwt-debug-gridTable > div:nth-child(3) > div > div:nth-child(2) > div > div > table > tbody > tr');

    $raws.each(function(){
      var $instance_type = $(this).find('td:nth-child(' + instance_type_index + ') > div');
      var instance_type_text = $instance_type.text()

      if (!instance_type_text.includes('$')) {
        var price_text = ' ($' + tokyo_ec2_prices[instance_type_text] * 24 * 30 + '/mo)'
        $instance_type.append(price_text);
      }

    });
  },1000);
})();

var tokyo_ec2_prices = {
  't3.nano': 0.0068,
  't3.micro': 0.0136,
  't3.small': 0.0272,
  't3.medium': 0.0544,
  't3.large': 0.1088,
  't3.xlarge': 0.2176,
  't3.2xlarge': 0.4352,
  't2.nano': 0.0076,
  't2.micro': 0.0152,
  't2.small': 0.0304,
  't2.medium': 0.0608,
  't2.large': 0.1216,
  't2.xlarge': 0.2432,
  't2.2xlarge': 0.4864,
  'm5.large': 0.124,
  'm5.xlarge': 0.248,
  'm5.2xlarge': 0.496,
  'm5.4xlarge': 0.992,
  'm5.12xlarge': 2.976,
  'm5.24xlarge': 5.952,
  'm4.large': 0.129,
  'm4.xlarge': 0.258,
  'm4.2xlarge': 0.516,
  'm4.4xlarge': 1.032,
  'm4.10xlarge': 2.58,
  'm4.16xlarge': 4.128,
  'c5.large': 0.107,
  'c5.xlarge': 0.214,
  'c5.2xlarge': 0.428,
  'c5.4xlarge': 0.856,
  'c5.9xlarge': 1.926,
  'c5.18xlarge': 3.852,
  'c4.large': 0.126,
  'c4.xlarge': 0.252,
  'c4.2xlarge': 0.504,
  'c4.4xlarge': 1.008,
  'c4.8xlarge': 2.016,
  'p3.2xlarge': 5.243,
  'p3.8xlarge': 20.972,
  'p3.16xlarge': 41.944,
  'p2.xlarge': 1.542,
  'p2.8xlarge': 12.336,
  'p2.16xlarge': 24.672,
  'g3.4xlarge': 1.58,
  'g3.8xlarge': 3.16,
  'g3.16xlarge': 6.32,
  'x1.16xlarge': 9.671,
  'x1.32xlarge': 19.341,
  'x1e.xlarge': 1.209,
  'x1e.2xlarge': 2.418,
  'x1e.4xlarge': 4.836,
  'x1e.8xlarge': 9.672,
  'x1e.16xlarge': 19.344,
  'x1e.32xlarge': 38.688,
  'r4.large': 0.16,
  'r4.xlarge': 0.32,
  'r4.2xlarge': 0.64,
  'r4.4xlarge': 1.28,
  'r4.8xlarge': 2.56,
  'r4.16xlarge': 5.12,
  'z1d.large': 0.227,
  'z1d.xlarge': 0.454,
  'z1d.2xlarge': 0.908,
  'z1d.3xlarge': 1.362,
  'z1d.6xlarge': 2.724,
  'z1d.12xlarge': 5.448,
  'i3.large': 0.183,
  'i3.xlarge': 0.366,
  'i3.2xlarge': 0.732,
  'i3.4xlarge': 1.464,
  'i3.8xlarge': 2.928,
  'i3.16xlarge': 5.856,
  'd2.xlarge': 0.844,
  'd2.2xlarge': 1.688,
  'd2.4xlarge': 3.376,
  'd2.8xlarge': 6.752,
}
