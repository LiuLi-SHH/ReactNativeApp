//
//  RootViewController.m
//  AwesomeProject
//
//  Created by xxx_Mac on 2018/5/16.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RootViewController.h"

#import "ReactNativeViewController.h"

@interface RootViewController ()

@end

@implementation RootViewController

- (void)viewDidDisappear:(BOOL)animated
{
  [super viewDidDisappear:animated];
  [self.navigationController setNavigationBarHidden:YES];
}

- (void)viewWillAppear:(BOOL)animated
{
  [super viewWillAppear:animated];
  [self.navigationController setNavigationBarHidden:NO];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
  self.title = @"根页面";
  
  UIButton *btn1 = [UIButton buttonWithType:UIButtonTypeCustom];
  btn1.backgroundColor = [UIColor redColor];
  btn1.frame = (CGRect){100, 100, 100, 50};
  [btn1 addTarget:self action:@selector(btn1Action) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:btn1];
  
  UIButton *btn2 = [UIButton buttonWithType:UIButtonTypeCustom];
  btn2.backgroundColor = [UIColor redColor];
  btn2.frame = (CGRect){100, 170, 100, 50};
  [btn2 addTarget:self action:@selector(btn2Action) forControlEvents:UIControlEventTouchUpInside];
  [self.view addSubview:btn2];
  
}

- (void)btn1Action
{
  [self.navigationController pushViewController:[ReactNativeViewController new] animated:YES];
}

- (void)btn2Action
{
  
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
