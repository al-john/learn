<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use DB;

class SuperUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'createsuperuser';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Super User';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $input['first_name'] = $this->ask('First name');
        $input['last_name'] = $this->ask('Last name');
        $input['email'] = $this->ask('Email');
        $input['password'] = $this->secret('Password');
        $input['confirm_password'] = $this->secret('Confirm Password');

        if(!is_null($input['email']) && !is_null($input['password']) &&
            $input['password'] == $input['confirm_password'])
            {
                $input['password'] = bcrypt($input['password']);
                $user = User::create($input);
                $this->info('Create super user successful.');
            }
       
        
    }
}
